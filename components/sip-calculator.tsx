"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [expectedReturnRate, setExpectedReturnRate] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)
  const [totalInvestment, setTotalInvestment] = useState(0)
  const [estimatedReturns, setEstimatedReturns] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [chartData, setChartData] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState("calculator")

  useEffect(() => {
    calculateSIP()
  }, [monthlyInvestment, expectedReturnRate, timePeriod])

  const calculateSIP = () => {
    const monthlyRate = expectedReturnRate / 12 / 100
    const months = timePeriod * 12
    const investedAmount = monthlyInvestment * months

    // Formula: P × ({[1 + i]^n - 1} / i) × (1 + i)
    // Where P is monthly investment, i is monthly interest rate, n is number of months
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)

    setTotalInvestment(investedAmount)
    setEstimatedReturns(Math.max(0, futureValue - investedAmount))
    setTotalValue(futureValue)

    // Generate yearly data for chart
    const yearlyData = []
    for (let year = 1; year <= timePeriod; year++) {
      const yearlyMonths = year * 12
      const yearlyInvestedAmount = monthlyInvestment * yearlyMonths
      const yearlyFutureValue =
        monthlyInvestment * ((Math.pow(1 + monthlyRate, yearlyMonths) - 1) / monthlyRate) * (1 + monthlyRate)
      const yearlyReturns = yearlyFutureValue - yearlyInvestedAmount

      yearlyData.push({
        year: `Year ${year}`,
        investment: Math.round(yearlyInvestedAmount),
        returns: Math.round(yearlyReturns),
        total: Math.round(yearlyFutureValue),
      })
    }
    setChartData(yearlyData)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleMonthlyInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value.replace(/,/g, "")) || 0
    setMonthlyInvestment(value)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Systematic Investment Plan (SIP) Calculator</CardTitle>
        <CardDescription>Calculate the future value of your regular investments</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="chart">Chart</TabsTrigger>
          </TabsList>
          <TabsContent value="calculator" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="monthlyInvestment">Monthly Investment (₹)</Label>
                  <Input
                    id="monthlyInvestment"
                    type="text"
                    className="w-24 text-right"
                    value={monthlyInvestment.toLocaleString()}
                    onChange={handleMonthlyInvestmentChange}
                  />
                </div>
                <Slider
                  id="monthlyInvestmentSlider"
                  min={500}
                  max={100000}
                  step={500}
                  value={[monthlyInvestment]}
                  onValueChange={(value) => setMonthlyInvestment(value[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹500</span>
                  <span>₹100,000</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="expectedReturnRate">Expected Return Rate (%)</Label>
                  <Input
                    id="expectedReturnRate"
                    type="number"
                    className="w-24 text-right"
                    value={expectedReturnRate}
                    onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                  />
                </div>
                <Slider
                  id="expectedReturnRateSlider"
                  min={1}
                  max={30}
                  step={0.5}
                  value={[expectedReturnRate]}
                  onValueChange={(value) => setExpectedReturnRate(value[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="timePeriod">Time Period (Years)</Label>
                  <Input
                    id="timePeriod"
                    type="number"
                    className="w-24 text-right"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                  />
                </div>
                <Slider
                  id="timePeriodSlider"
                  min={1}
                  max={30}
                  step={1}
                  value={[timePeriod]}
                  onValueChange={(value) => setTimePeriod(value[0])}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 year</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-muted p-6">
              <h3 className="mb-4 text-lg font-medium">Investment Summary</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Investment</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(totalInvestment)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Estimated Returns</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(estimatedReturns)}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="chart">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 60,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" angle={-45} textAnchor="end" height={60} />
                  <YAxis tickFormatter={(value) => `₹${value / 1000}K`} />
                  <Tooltip
                    formatter={(value) => [`₹${value.toLocaleString()}`, undefined]}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Bar dataKey="investment" name="Investment" stackId="a" fill="#8884d8" />
                  <Bar dataKey="returns" name="Returns" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center space-x-6">
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-[#8884d8]"></div>
                <span className="text-sm">Investment</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-3 w-3 rounded-full bg-[#82ca9d]"></div>
                <span className="text-sm">Returns</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

