
import React from 'react'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Senetourisme.com</h1>
          <p className="text-lg text-gray-600">
            Le nom de domaine <strong>Senetourisme.com</strong> est à vendre.
            Un nom de domaine de qualité pour un site web spécialisé dans le tourisme au Sénégal.
            Contactez-nous pour plus d'informations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://wa.me/773698046" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Contact WhatsApp
              </a>
            </div>
            <Contact />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
