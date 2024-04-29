/**
 *
 * @param {String} text1 // Texto a comparar
 * @param {String} text2 // Texto a buscar
 * @returns {String}
 */
export const textSensitive = (text1, text2) => {
	return text1
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.includes(
			text2
				.trim()
				.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
		)
}
