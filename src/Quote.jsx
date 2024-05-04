import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch(`https://api.quotable.io/quotes/random`);
      if (!response.ok) {
        throw new Error("Failed to fetch quote details");
      }
      const data = await response.json();
      setQuote(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
                id="card"

        className="flex flex-col items-center rounded-xl border border-white p-4"
        style={{
            transition: 'box-shadow 0.3s ease',
            boxShadow: '0 0 0 transparent',
         maxWidth: '26rem' 

          }}
          onMouseEnter={() => {
            document.getElementById('card').style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
          }}
          onMouseLeave={() => {
            document.getElementById('card').style.boxShadow = '0 0 0 transparent';
          }}
      >
        <div 
          className="relative flex items-center gap-4 pt-0 overflow-hidden text-white bg-transparent shadow-none rounded-xl bg-clip-border"
          
        >
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-semibold text-blue-gray-900 underline">Random Quote</h5>
            </div>
          </div>
        </div>
        <div className="p-0 mb-6">
          {quote && (
            <p className="text-white">
              "{quote[0].content}"
            </p>
          )}
        </div>
        <button
          onClick={fetchQuote}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Shuffle
          </span>
        </button>
        
      </div>
    </div>
  );
}

export default Quote;
