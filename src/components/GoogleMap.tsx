const GoogleMap = () => {
  const clinicLocation = "706, Ward 8, Sector 29, Noida, Uttar Pradesh, India";
  const encodedLocation = encodeURIComponent(clinicLocation);
  
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-card">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6daTOSGBa1v2ITO&q=${encodedLocation}&zoom=15`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bhargava Dental Care Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;