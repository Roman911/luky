import { StyleSheet } from 'aphrodite/no-important'
import {$white, $darkWhite, $darkGray, $Red, $Blue} from "./variabelsColor";

export default StyleSheet.create({
  btn: {
    border: `2px solid ${$darkGray}`,
    padding: '7px 20px',
    background: 'transparent',
    transition: '300ms',
    cursor: 'pointer',
    ':hover': {
      background: $darkGray,
      color: $darkWhite
    }
  },
  tagContent: {
    margin: '20px 0'
  },
  tag: {
    backgroundColor: $white,
    padding: '6px 12px',
    marginRight: 20,
    fontSize: 15,
    transition: '400ms',
    cursor: 'pointer',
    borderRadius: 3,
    boxShadow: `0 0 5px 0 ${$darkGray}`,
    ':hover': {
      color: $Red,
      backgroundColor: $darkGray
    }
  },
  icon: {
    backgroundColor: $darkWhite,
    color: $darkGray,
    margin: '5px 10px',
    borderRadius: '50%',
    transition: '300ms',
    ':hover': {
      color: $white,
      backgroundColor: $Blue
    }
  },
  iconI: {
    padding: '7px 13px',
    fontSize: 24
  },
  iconF: {
    padding: '9px 19px',
    fontSize: 22
  },
  control: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '100%',
    background: 'none',
    border: 'none',
    fontSize: 40,
    color: 'rgba(255, 255, 255, 0.5)',
    padding: '0 20px',
    cursor: 'pointer',
    ':hover': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    ':focus': {
      outline: 'none'
    }
  },
  controlLeft: {
    left: 0,
    width: '20%',
    textAlign: 'start'
  },
  controlRight: {
    right: 0,
    width: '70%',
    textAlign: 'end'
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    background: 'none',
    border: 'none',
    padding: '20px 40px',
    fontSize: 36,
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.5)',
    ':hover': {
      color: 'rgba(255, 255, 255, 0.8)'
    },
    ':focus': {
      outline: 'none'
    }
  }
})