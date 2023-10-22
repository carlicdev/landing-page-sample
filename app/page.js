import Image from 'next/image'
import CountDownTimer from './components/CountDownTimer'

export default function Home() {
  return (
    <main  className='w-full min-h-screen' style={{backgroundImage: 'url(/concert.jpg)'}}>
      <div className='bg-black bg-opacity-50 w-full h-screen  flex flex-col items-center justify-center'>
        <p className='text-2xl text-white pb-2 font-thin'>Octubre 12, 2023 | CDMX</p>
        <div className='text-4xl font-black mb-5'>Forma Parte de la Historia</div>
        <CountDownTimer />
        <div className='mt-5'>
          <button className='px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110'>
            Apartar mi lugar
          </button>
        </div>
      </div>
    </main>
  )
}
