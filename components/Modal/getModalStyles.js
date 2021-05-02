export default function getModalStyle() {
    const top = 10;
    const left = 50;
    return {
      top: `${top}%`,
      margin: 'auto',
      transform: `translate(translate(-${top}%, -${left}%))`
    }
  }