const numberOfCharts = 8

const createCanvasCharts = (numberOfCharts) => {
  const divContainerCharts = document.querySelector('.charts-container')

  const divCanvas = document.createElement('div')
  divCanvas.classList.add('chart-card')
  divCanvas.classList.add('card')
  const canvas = document.createElement('canvas')
  canvas.id = 'chart'

  divCanvas.appendChild(canvas)
  divContainerCharts.appendChild(divCanvas)

  numberOfCharts--

  if (numberOfCharts === 0) return

  createCanvasCharts(numberOfCharts)
}

createCanvasCharts(numberOfCharts)

const ctx = document.querySelectorAll('#chart')
const datas = [12, 19, 3, 5, 2, 3]
const chartTypes = ['bar', 'doughnut', 'radar', 'line', 'polarArea', 'scatter', 'bubble']

const createChartCards = (datas) => {
  const divDatas = document.querySelector('.datas')

  for (let data of datas) {
    const divCardData = document.createElement('div')
    divCardData.classList.add('data-card')
    divCardData.innerHTML = data
    divDatas.appendChild(divCardData)
  }
}

const createCharts = (ctx, chartTypes, datas, recursiveFlag) => {
  const initRandom = Math.floor(Math.random() * chartTypes.length)
  const finalRandom = initRandom + 1

  const chartConfig = {
    type: chartTypes.slice(initRandom, finalRandom),
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: datas,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }

  new Chart(ctx[recursiveFlag], chartConfig)

  recursiveFlag++
  
  if (recursiveFlag > ctx.length - 1) return

  createCharts(ctx, chartTypes, datas, recursiveFlag)
}

createChartCards(datas)
createCharts(ctx, chartTypes, datas, 0)













