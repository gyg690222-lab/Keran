# 3D Interactive Face

A 3D face model built with Three.js that can open/close its mouth and rotate its head to look left and right.

## Features

- 🎭 **3D Face Model** - Realistic 3D head with facial features
- 👄 **Mouth Animation** - Open and close the mouth smoothly
- 🔄 **Head Rotation** - Turn head left and right
- 👀 **Detailed Eyes** - White eyes, colored iris, and pupils
- 🎨 **Modern UI** - Beautiful gradient background with interactive controls
- 💫 **Smooth Animations** - WebGL rendering with proper lighting

## Technologies

- **Three.js** - 3D graphics library
- **WebGL** - Hardware-accelerated rendering
- **HTML5/CSS3** - UI and styling
- **Vanilla JavaScript** - No frameworks

## How to Use

1. Clone this repository
2. Open `index.html` in a web browser
3. Use the sliders to:
   - **Mouth Slider**: Open (0%) to Close (100%)
   - **Head Rotation Slider**: Look left (-100) to right (100)

## File Structure

```
├── index.html      # Main HTML entry point
├── style.css       # Styling and layout
├── main.js         # Three.js scene setup and controls
├── face.js         # 3D face model class
└── README.md       # This file
```

## Future Enhancements

- [ ] Blinking eyes animation
- [ ] Eyebrow movement
- [ ] Facial expressions (happy, sad, angry)
- [ ] Keyboard controls
- [ ] Mobile touch controls
- [ ] Face texture mapping
- [ ] Sound lip-sync

## License

MIT