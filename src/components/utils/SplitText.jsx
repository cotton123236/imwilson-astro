import { memo, Fragment } from 'react'


const DefaultWord = memo(({ children }) => {
	return (
		<span className='inline-block'>{children}</span>
	)
})

const DeafultChar = memo(({ children }) => {
	return (
		<span>
			{children}
		</span>
	)
})

const SplitText = ({ text = '', Word = DefaultWord, Char = DeafultChar }) => {
	const linesArr = text.toString().split('<br>')

	let wordCountIndex = 0
	let charCountIndex = 0

	return (
		<>
			{linesArr.map((lines, linesIndex) => {
				const words = lines.split(' ')
				return (
					<Fragment key={linesIndex}>
						{linesIndex === 0 ? '' : <br />}
						{words.map((word, wordIndex) => {
							const chars = word.split('')
							return (
								<Fragment key={wordIndex}>
									{wordIndex === 0 ? '' : <span> </span>}
									<Word
										word={word}
										wordIndex={wordIndex}
										wordCountIndex={wordCountIndex++}
									>
										{chars.map((char, charIndex) => (
											<Char
												key={charIndex}
												char={char}
												charIndex={charIndex}
												charCountIndex={charCountIndex++}
											>
												{char}
											</Char>
										))}
									</Word>
								</Fragment>
							)
						})}
					</Fragment>
				)
			})}
		</>
	)
}

export default SplitText