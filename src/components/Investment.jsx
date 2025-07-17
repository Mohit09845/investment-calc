import { useState } from 'react';

export default function Investment() {
  const [stockName, setStockName] = useState('');
  const [initialAmount, setInitialAmount] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [years, setYears] = useState('');
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const principal = parseFloat(initialAmount);
    const rate = parseFloat(growthRate) / 100;
    const time = parseFloat(years);

    if (principal && rate && time) {
      const finalAmount = principal * Math.pow(1 + rate, time);
      setTotal(finalAmount.toFixed(2));
    } else {
      setTotal(0);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-700">
        💰 Investment Calculator 📈
      </h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-red-600">
            📊 Stock Name:
          </label>
          <input
            type="text"
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
            className="w-full p-3 border-2 border-red-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-red-700 placeholder-red-400"
            placeholder="🚀 e.g., Apple, Tesla, Google"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-red-600">
            💵 Initial Investment ($):
          </label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            className="w-full p-3 border-2 border-red-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-red-700 placeholder-red-400"
            placeholder="💲 1000"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-red-600">
            📈 Expected Growth Rate (%):
          </label>
          <input
            type="number"
            value={growthRate}
            onChange={(e) => setGrowthRate(e.target.value)}
            className="w-full p-3 border-2 border-red-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-red-700 placeholder-red-400"
            placeholder="🔥 7"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-red-600">
            ⏰ Number of Years:
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-3 border-2 border-red-300 rounded-lg focus:border-red-500 focus:outline-none bg-white text-red-700 placeholder-red-400"
            placeholder="📅 10"
          />
        </div>

        <button
          onClick={calculateTotal}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          🧮 Calculate Total 🎯
        </button>

        {total > 0 && (
          <div className="mt-6 p-5 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-lg shadow-md">
            <p className="text-lg font-bold text-green-700 text-center">
              🎉 {stockName && `${stockName} - `}Total after {years} years: 
              <span className="text-2xl text-green-800 ml-2">
                ${total} 💸
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}