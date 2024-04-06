import React from "react";

export default function Disclaimer() {
    return (
        <div className="p-4 md:p-12">
            <h2 className="text-2xl font-bold mb-8">Disclaimer:</h2>
            <p className="mb-4">
                Trading Pulse is a platform designed to provide users with economic analysis and insights to aid in their trading decisions. While we strive to offer accurate and timely information, we cannot guarantee the completeness, reliability, or suitability of the content provided.            </p>

            <p className="mb-4">
                Trading in financial markets involves inherent risks, and past performance is not indicative of future results. The analyses and opinions expressed on Trading Pulse are for informational purposes only and should not be construed as financial advice or recommendations to buy, sell, or hold any financial instrument.            </p>

            <p className="mb-4">
                Users are solely responsible for their own trading decisions and should conduct their own research and due diligence before making any investment. Trading Pulse shall not be liable for any losses, damages, or expenses arising from the use of or reliance on the information provided on this platform.
            </p>

            <p className="mb-4">
                Additionally, Trading Pulse may contain links to third-party websites or resources for informational purposes. We do not endorse or control the content of these websites and are not responsible for any consequences that may arise from accessing them.
            </p>
            <p className="mb-4">
                By using Trading Pulse, you acknowledge and agree to the terms of this disclaimer. If you do not agree with these terms, please refrain from using our platform.
            </p>
        </div>
    );
}