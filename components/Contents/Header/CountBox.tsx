interface CountBoxType {
  title: string,
  // countFunction: () => number
}

export default function CountBox({title}:CountBoxType){
  return(
    <span className="text-xl font-medium">{title}: {} 원</span>
  )
}