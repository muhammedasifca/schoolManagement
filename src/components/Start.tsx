type HomeProps={
    click:()=>void
}
const Start = (props:HomeProps) => {
    const {click}=props
  return (
    <div className="h-screen w-screen bg-zinc-700 flex flex-col justify-center items-center">
        <h2 className="text-white text-7xl text-center">Welcome to School Management</h2>
        <button onClick={click} className="bg-black text-white mt-9 py-2 px-3 rounded-md">Get started</button>
    </div>
  )
}

export default Start
