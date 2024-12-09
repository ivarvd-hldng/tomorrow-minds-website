// Rest van de imports blijven hetzelfde...

const ContactForm = () => {
  return (
    <form 
      name="tomorrow-minds-contact" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="tomorrow-minds-contact" />
      <input type="hidden" name="bot-field" />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
        <textarea
          name="message"
          rows="4"
          className="w-full p-2 border rounded-lg"
          required
        ></textarea>
      </div>

      <button 
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 w-full"
      >
        Verstuur bericht
      </button>
    </form>
  );
};

// Rest van de Website component blijft hetzelfde...