module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#2D0B0E',
        'dark-white': '#171D1E',
        'off-white': '#D8D8D8',

        rainbow: {
          100: "#FA7268",
          200: "#DF5F83",
          250: "#CC5D8A",
          300: "#B45994",
          400: "#7F5797",
          500: "#48538A",
        },
      },
      backgroundImage: {
        'profile': "url('/src/assets/isaacProfile.jpg')",
        'curious': "url('/src/assets/curious.jpg;)",
        'books': "url('/src/assets/books-thin.png')",
        'moon': "url('/src/assets/Moon.jpg')",
        'runner': "url('/src/assets/runner.png')",
        'isaac-boat': "url('/src/assets/isaac-boat.jpg')",
        'isaac-profile': "url('/src/assets/about/profile.jpg')",
        'france1': "url('/src/assets/google-photos/france1.jpg')",
        'france2': "url('/src/assets/google-photos/france2.jpg')",
        'france3': "url('/src/assets/google-photos/france3.jpg')",
        'crucial': "url('/src/assets/crucial_conversations.jpg')",
        'seven-spiritual': "url('/src/assets/seven_spiritual_laws.jpg')",
        'a-new-earth': "url('/src/assets/a_new_earth.jpg')",
        'helmet': "url('/src/assets/helmet.png')",
        'osprey-1': "url('/src/assets/Osprey-1.jpg')",
        'osprey-2': "url('/src/assets/Osprey-2.jpg')",
        'osprey-3': "url('/src/assets/Osprey-3.jpg')",
        'osprey-4': "url('/src/assets/Osprey-4.jpg')",
        'blackred-1': "url('/src/assets/bird2.jpg')",
        'blackred-2': "url('/src/assets/Blackred bird.jpg')",
        'fisher-1': "url('/src/assets/fisher-bird-1.jpg')",
        'fisher-2': "url('/src/assets/fisher-bird-2.jpg')",
        'fisher-3': "url('/src/assets/fisher-bird-3.jpg')",
        'sugarbush': "url('/src/assets/sugarbush_thin.jpg')",
        'divider': "url('/src/assets/svg/divider_4.svg')",
        'divider-1': "url('/src/assets/svg/divider_1.svg')",
        'divider-2': "url('/src/assets/svg/divider_2.svg')",
        'top-dec': "url('/src/assets/svg/top_dec.svg')",
        'bot-dec': "url('/src/assets/svg/bot-dec.svg')",
        'bot-dec2': "url('/src/assets/svg/bot-dec2.svg')",
        'top-dec2': "url('/src/assets/svg/top-dec2.svg')",
        'bot-dec3': "url('/src/assets/svg/bot-dec3.svg')",
        'resume': "url('/src/assets/Isaac-Padberg-Fire.svg')",
      }
    },
    fontFamily: {
      main: ['Aboreto', 'serif'],
      heading: ['Major Mono Display', 'monospace'],
      body: ['Jost', 'sans-serif'],
    }
  },
  plugins: [],
}
