import React from "react";
const Imprint = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fairpage">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">Imprint</h2>
        <p className="mb-4">
          Dein Unternehmensname
          <br />
          Musterstraße 123
          <br />
          12345 Musterstadt
        </p>
        <p className="mb-4">
          Telefon: 01234 / 567890
          <br />
          E-Mail: info@deinunternehmen.com
        </p>
        <p className="mb-4">
          Vertretungsberechtigter: Max Mustermann (Geschäftsführer)
          <br />
          Registergericht: Amtsgericht Musterstadt
          <br />
          Registernummer: HRB 12345
        </p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          DE123456789
        </p>
      </div>
    </div>
  );
};

export default Imprint;
