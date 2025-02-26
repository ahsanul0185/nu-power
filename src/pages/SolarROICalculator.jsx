import React, { useState } from "react";
import { Card, CardContent } from "../components/solar-roi-calculator/Card";
import { Slider } from "../components/solar-roi-calculator/Slider";
import { Button } from "../components/solar-roi-calculator/Button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PageTitle from "../components/common/PageTitle";

const SolarROICalculator = () => {
  const [bill, setBill] = useState(0);
  const [autonomy, setAutonomy] = useState(0);
  const [phase, setPhase] = useState("single");
  
  const costPerKWh = 3.582;
  const batteryCostPerKWh = 5.54;
  const panelCostPerKwp = 9.20;
  const peakSunHours = 5;
  const systemLossFactor = 0.8; 
  
  const monthlyConsumption = bill / costPerKWh;
  const dailyConsumption = monthlyConsumption / 30;
  const systemSize = (monthlyConsumption / (peakSunHours * 30)) / systemLossFactor;
  
  const batteryCapacity = autonomy > 0 ? ((dailyConsumption * (autonomy / 24)) / systemLossFactor) : 0;
  
  const batteryCost = autonomy > 0 ? batteryCapacity * batteryCostPerKWh * 1000 : 0;
  const panelCost = systemSize * panelCostPerKwp * 1000;
  const inverterCost = autonomy > 0 ? 150000 : 88000;
  const installationCost = 8000;
  const systemCost = bill > 0 ? panelCost + batteryCost + inverterCost + installationCost : 0;

  const annualSavings = (monthlyConsumption * 12 * costPerKWh) * systemLossFactor;
  const roi = systemCost / annualSavings;

  const data = Array.from({ length: 11 }, (_, i) => ({
    year: i,
    savings: i * annualSavings,
  }));

  return (
    <div className="p-4 bg-orange-500 min-h-screen grid grid-cols-3 gap-4">
      <PageTitle title="SOLAR ROI CALCULATOR | Nu Power Group" />
      <div className="col-span-3 flex justify-between items-center mb-4">
        <img src="/mnt/data/logo wht.jpg" alt="Company Logo" className="h-16" />
        <div className="text-center text-xl font-bold">SOLAR ROI CALCULATOR</div>
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <Card>
          <CardContent>
            <h3 className="mb-2">Select Power Phase</h3>
            <div className="flex gap-2">
              <Button style={{ backgroundColor: phase === "single" ? "green" : "black", color: "white" }} onClick={() => setPhase("single")}>
                Single-Phase
              </Button>
              <Button style={{ backgroundColor: phase === "three" ? "green" : "black", color: "white" }} onClick={() => setPhase("three")}>
                Three-Phase
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card><CardContent>
          <h3>Monthly Electricity Bill (R)</h3>
          <Slider min={0} max={500000} step={5000} value={[bill]} onValueChange={(val) => setBill(val[0])} />
          <p>R{bill} ({monthlyConsumption.toFixed(2)} kWh)</p>
        </CardContent></Card>

        <Card><CardContent>
          <h3>Energy Autonomy (Hours)</h3>
          <Slider min={0} max={24} step={1} value={[autonomy]} onValueChange={(val) => setAutonomy(val[0])} />
          <p>{autonomy} hours</p>
        </CardContent></Card>
      </div>
      
      <div className="col-span-2 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Card><CardContent><h3>System Cost:</h3> <p>R{systemCost.toFixed(2)}</p></CardContent></Card>
          <Card><CardContent><h3>Battery Capacity:</h3> <p>{batteryCapacity.toFixed(2)} kWh</p></CardContent></Card>
          <Card><CardContent><h3>System Size:</h3> <p>{systemSize.toFixed(2)} kWp</p></CardContent></Card>
          <Card><CardContent><h3>Battery System Cost:</h3> <p>R{batteryCost.toFixed(2)}</p></CardContent></Card>
          <Card><CardContent><h3>Payback Period:</h3> <p>{roi.toFixed(2)} Years</p></CardContent></Card>
          <Card><CardContent><h3>Monthly Estimated Savings:</h3> <p>R{(annualSavings / 12).toFixed(2)}</p></CardContent></Card>
        </div>

        <Card>
          <CardContent>
            <h3>Payback Period Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="savings" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SolarROICalculator