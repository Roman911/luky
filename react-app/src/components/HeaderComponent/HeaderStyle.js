import { StyleSheet } from 'aphrodite/no-important';

import {$darkGray, $white} from '../../style/variabelsColor'

export default StyleSheet.create({
  wrapper: {
    backgroundSize: 'cover',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'SourceSans',
    color: $white,
    fontSize: 74,
    fontWeight: 'lighter'
  },
  block: {
    backgroundColor: $white,
    padding: '20px 40px',
    boxShadow: `0 0 5px ${$darkGray}`,
    borderRadius: 4
  }
})