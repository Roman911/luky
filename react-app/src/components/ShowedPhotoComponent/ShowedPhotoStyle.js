import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
  bg: {
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflowY: 'scroll'
  },
  block: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  img: {
    maxWidth: 'calc(100vw - 50px)',
    maxHeight: 'calc(100vh - 50px)'
  }
})