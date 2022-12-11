module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('/src/assets/isaacProfile.jpg')",
        'books': "url('/src/assets/books-thin.png')",
        'moon': "url('/src/assets/Moon.jpg')",
        'runner': "url('/src/assets/runner.png')",
        'isaac-boat': "url('/src/assets/isaac-boat.jpg')",
        'france1': "url('/src/assets/google-photos/france1.jpg')",
        'france2': "url('/src/assets/google-photos/france2.jpg')",
        'france3': "url('/src/assets/google-photos/france3.jpg')",
        'crucial': "url('/src/assets/crucial_conversations.jpg')",
        'seven-spiritual': "url('/src/assets/seven_spiritual_laws.jpg')",
        'a-new-earth': "url('/src/assets/a_new_earth.jpg')",
        'helmet': "url('/src/assets/helmet.png')",
      }
    },
    fontFamily: {
      main: ['Italiana', 'serif'],
      heading: ['Major Mono Display', 'monospace'],
      body: ['Jost', 'sans-serif'],
    }
  },
  plugins: [],
}
