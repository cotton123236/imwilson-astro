import clsx from 'clsx';
import SplitText from '../utils/SplitText'
// styles
import styles from './IndexIntroTitle.module.scss'


const IndexIntroTitle = ({ text }) => {
  const matchesWord = ['web', 'design']
  const delay = 0
  const space = 5
  const duration = 800


  return (
    <SplitText
      text={text}
      Word={({ children, word }) => {
        if (matchesWord.includes(word.toLowerCase())) {
          return (
            <span className={clsx(styles['word'], 'word font-serif font-bold text-h0')}>{children}</span>
          )
        }
        else {
          return (
            <span className={clsx(styles['word'], 'word')}>{children}</span>
          )
        }
      }}
      Char={({ children, charCountIndex }) => (
        <span
          className={clsx(styles['char'], 'char')}
          style={{
            '--char-delay': `${delay + space * charCountIndex}ms`,
            '--char-duration': `${duration}ms`
          }}
        >
          {children}
        </span>
      )}
    />
  )
}

export default IndexIntroTitle