import { useState } from 'react'
import { Header } from './components/Header'
import { useRef } from 'react'
import QRCode from "react-qr-code";


function App() {
  const [count, setCount] = useState(0)
  const urlRef = useRef()
  const selectRef = useRef()
  const spinnerRef = useRef()
  const qrCodeRef = useRef()
  // const qrCode2 = useRef()

  const showSpinner =() =>{
    if (spinnerRef.current) {
      spinnerRef.current.style.display = 'block'
    }
    
  }

  const hideSpinner = () =>{
    if(spinnerRef.current){
      spinnerRef.current.style.display = 'none'
    }
  }
  const generateSubmit =(e) =>{
    e.preventDefault()
    // urlRef === ''? console.log("pls enter url") : showSpinner
    if(urlRef.current.value === ''){
       alert("Pls enter a URL")
    }
    else{
      showSpinner();
    }
    setTimeout(()=>{
      hideSpinner()

      generateQRCode(urlRef, selectRef)
    }, 1000)
    console.log(selectRef.current.value, urlRef.current.value);
  }

  const generateQRCode = (urlRef, selectRef) =>{
    const qrCodeRef = QRCode(qrCodeRef.current, {
      text: urlRef,
      width: selectRef,
      height: selectRef,
    })
  }

  


  return (
    <div className="">
      <Header /> 
      <div className='main flex flex-col-reverse items-center justify-center p-10 m-auto md:max-w-4xl md:flex-row'>
        <div className='bg-red-200 w-full md:w-2/3 md:mr-24'> 
          <h1 className='text-2xl font-bold mb-5 md:text-3xl'>100% free and easy to use</h1>
          <p className='mb-4'>This QR code app allows users to know the ingredients used in their foods</p>
          <p>Enter your URL below to generate a QR code & download the image</p>
          <form className="mt-4" onSubmit={generateSubmit}>
            <input type="text"
            ref={urlRef} 
            placeholder='Enter a URL'
            className="w-full border-2 border-gray-200 rounded p-3 text-gray-600
             mr-2 focus:outline-none mb-5" />
             <select id="size"
             ref={selectRef}
             className='"w-full border-2 border-gray-200 rounded p-3 text-gray-600
             mr-2 focus:outline-none mb-5'>
                <option value="100">100x100</option>
                <option value="200">200x200</option>
                <option value="300" >300x300</option>
                <option value="400">400x400</option>
                <option value="500">500x500</option>
             </select>
             <button className='bg-gray-600 rounded w-full text-white
              py-3 px-4 mt-5 hover:bg-black' type='submit'
              
              >Generate QR code</button>
          </form>
        </div>
        <div className='bg-red-400 w-full md:w-1/3 self-center'>B</div>
          <img src="src/assets/qrCode2.png" alt=""
           className='w-1/2 md:w-full m-auto mb-10' />
        </div>
        <div className='max-w-5xl m-auto flex flex-col text-center items-center justify-center mt-20'>
            {/* Spinner */}
            <img src="src/assets/iphone_spinner.gif" ref={spinnerRef}
            className='hidden mr-2 w-24 h-24 text-gray-200 dark:text-gray-600 fill-pink-600'
            alt="" />
            <span className='sr-only'> Loading....</span>

            {/* QR code output */}
            <div className='m-auto' ref={qrCodeRef}></div>
          </div>     
    </div>
    
  ) 
}

export default App
