import React from 'react';

const Contact = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">Contactez-nous :</h2>
      <ul className="list-disc list-inside">
        <li>Téléphone : <a href="tel:+221760000000">76 000 00 00</a></li>
        <li>Email : <a href="mailto:contact@senetourisme.com">contact@senetourisme.com</a></li>
        <li>Adresse : Dakar, Sénégal</li>
      </ul>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <head>
        <title>Senetourisme.com - Le tourisme au Sénégal</title>
        <meta name="description" content="Site web spécialisé dans le tourisme au Sénégal. Découvrez les meilleures destinations, activités, hébergements et plus encore." />
        <meta name="keywords" content="Sénégal, tourisme, voyages, destinations, activités, hébergements, plage, safari" />
        <meta name="author" content="Votre nom ou le nom de votre entreprise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
  );
};

export default HomePage;
