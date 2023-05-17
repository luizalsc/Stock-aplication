import PropTypes from 'prop-types'

function Wallet (props) {
  return (
    <div className="col-span-1 min-w-fit">
      <h1 className="text-xl font-semibold font-mono leading-6 text-red-800 bg-red-100 text-center py-1 rounded-md">Ações escolhidas</h1>
      <div className="px-5">
        <ul className="grid grid-cols-2 grid-rows-5 gap-1 divide-y divide-gray-100 sm:grid-cols-1 sm:auto-rows-auto">
          {props.portifolioInfo.length > 0
            ? (
                props.portifolioInfo.map((stock, index) => (
              <li key={index} value={stock.stockInfos.ticker} className="col-span-1 row-span-1 py-5">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {stock.stockInfos.ticker}
                  {' '}
                  -
                  {' '}
                  {stock.percentual.percentual}
                  %
                </p>
              </li>
                ))
              )
            : (
            <li className="text-base font-sans font-semibold text-gray-700 mt-2">Aguardando escolhas</li>
              )}
        </ul>
      </div>
    </div>
  )
}

Wallet.propTypes = {
  portifolioInfo: PropTypes.arrayOf(PropTypes.object)
}

export { Wallet }
