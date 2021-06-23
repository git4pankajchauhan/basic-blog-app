import './Loader.css'

export default function Loader(props) {
  return (
    <>
      <div className='loader-container'>
        <div className='overlay'></div>
        <div class='lds-roller'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}
