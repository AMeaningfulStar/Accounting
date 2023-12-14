interface CountBoxType {
  title: string
  totalMoney: number
}

export default function TotalMoneyText({title, totalMoney = 0 }:CountBoxType){
  return(
    <span className="text-xl font-medium">{title}: {totalMoney.toLocaleString()} 원</span>
  )
}