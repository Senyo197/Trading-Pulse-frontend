import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import BarChart from "./BarChart";
import ToggleCustomDate from "./ToggleCustomDate";
import ToggleSelect from "./ToggleSelect";
import { getCachedData, setCachedData } from "./indexedDB";
import Spinner from "./Spinner";
import { useSearch } from "./SearchContext";

const USDChart = () => {
  const [lowEvents, setLowEvents] = useState([]);
  const [moderateEvents, setModerateEvents] = useState([]);
  const [highEvents, setHighEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchParams } = useSearch();
  const { startDate, endDate } = searchParams;

  const fetchData = async (startDate = "", endDate = "") => {
    setLoading(true);
    try {
      const impactLevels = ["L", "M", "H"];
      const fetchPromises = impactLevels.map(async (impact) => {
        const cacheKey = `USD_${impact}_${startDate}_${endDate}`;
        const cachedResponse = await getCachedData(cacheKey);

        if (cachedResponse) {
          return { impact, data: cachedResponse.data };
        } else {
          const response = await axios.get(
            "https://senyo197.pythonanywhere.com/api/economic-events/",
            {
              params: {
                currency: "USD",
                impact_level: impact,
                start_date: startDate,
                end_date: endDate,
              },
            }
          );

          await setCachedData(cacheKey, response.data);
          return { impact, data: response.data };
        }
      });

      const results = await Promise.all(fetchPromises);

      const fetchedData = results.reduce((acc, result) => {
        acc[result.impact] = result.data;
        return acc;
      }, {});

      setLowEvents(fetchedData["L"]);
      setModerateEvents(fetchedData["M"]);
      setHighEvents(fetchedData["H"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(startDate, endDate);
  }, [startDate, endDate]);

  const countOutcomes = (eventsData) => {
    let positiveCount = 0;
    let neutralCount = 0;
    let negativeCount = 0;

    eventsData.forEach((data) => {
      if (data.outcome === "positive") {
        positiveCount++;
      } else if (data.outcome === "neutral") {
        neutralCount++;
      } else if (data.outcome === "negative") {
        negativeCount++;
      }
    });

    return { positiveCount, neutralCount, negativeCount };
  };

  const chartData = useMemo(
    () => ({
      labels: ["Low Events", "Moderate Events", "High Events"],
      datasets: [
        {
          label: "Positive",
          data: [
            countOutcomes(lowEvents).positiveCount,
            countOutcomes(moderateEvents).positiveCount,
            countOutcomes(highEvents).positiveCount,
          ],
          backgroundColor: "rgba(0, 168, 243)",
          borderColor: "rgba(0, 168, 243, 1)",
          borderWidth: 1,
        },
        {
          label: "Neutral",
          data: [
            countOutcomes(lowEvents).neutralCount,
            countOutcomes(moderateEvents).neutralCount,
            countOutcomes(highEvents).neutralCount,
          ],
          backgroundColor: "rgba(88, 88, 88)",
          borderColor: "rgba(88, 88, 88, 1)",
          borderWidth: 1,
        },
        {
          label: "Negative",
          data: [
            countOutcomes(lowEvents).negativeCount,
            countOutcomes(moderateEvents).negativeCount,
            countOutcomes(highEvents).negativeCount,
          ],
          backgroundColor: "rgba(246, 70, 93)",
          borderColor: "rgba(246, 70, 93, 1)",
          borderWidth: 1,
        },
      ],
    }),
    [lowEvents, moderateEvents, highEvents]
  );

  return (
    <div className="p-4 sm:ml-64">
      <div className="sm:flex sm:justify-between sm:items-center sm:mb-4">
        <ToggleCustomDate />
        <div className="ml-8">
          <ToggleSelect />
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="chart-container">
          <BarChart chartData={chartData} />
        </div>
      )}
    </div>
  );
};

export default USDChart;
