const Title = ({ title, subTitle }) => {
  return (
    <>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center dark:text-white">{title}</h2>
      <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">{subTitle}</p>
    </>
  )
}
export default Title
