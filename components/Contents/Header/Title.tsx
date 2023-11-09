interface TitleType{
  title: string
}

export default function Title({title}:TitleType){
  return(
    <span className="text-3xl font-semibold">{title}</span>
  )
}