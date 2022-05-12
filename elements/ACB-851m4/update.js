function(instance, properties, context) {


function LeastSquares (X, Y, computeError, ret) {
  if (typeof computeError == 'object') {
    ret = computeError
    computeError = false
  }

  if (typeof ret == 'undefined') ret = {}

  var sumX = 0
  var sumY = 0
  var sumXY = 0
  var sumXSq = 0
  var N = X.length

  for(var i = 0; i < N; ++i) {
    sumX += X[i]
    sumY += Y[i]
    sumXY += X[i] * Y[i]
    sumXSq += X[i] * X[i]
  }

  ret.m = ((sumXY - sumX * sumY / N) ) / (sumXSq - sumX * sumX / N)
  ret.b = sumY / N - ret.m * sumX / N

  if (computeError) {
    var varSum = 0
    for (var j = 0; j < N; ++j) {
      varSum += (Y[j] - ret.b - ret.m*X[j]) * (Y[j] - ret.b - ret.m*X[j])
    }

    var delta = N * sumXSq - sumX*sumX
    var vari = 1.0 / (N - 2.0) * varSum

    ret.bErr = Math.sqrt(vari / delta * sumXSq)
    ret.mErr = Math.sqrt(N / delta * vari)
  }

  return function(x) {
    return ret.m * x + ret.b
  }
}

const howManyPredictions = 5

var Y = properties.yvalues.get(0,properties.yvalues.length());

var X=[];
    for (i=1; i <= Y.length; i++){
        X.push(i)
    }
    
function doTheRegression(){
var ret = {}
var f = LeastSquares(X,Y, false, ret)

let az = ret.m*12
az = az + ret.b
return az
}

for (i=0; i< properties.howmany; i++){
let a = doTheRegression()
Y.push(a)
X.push(X.length)
}

instance.publishState('xvalues', X)
    instance.publishState('yvalues',Y)

}