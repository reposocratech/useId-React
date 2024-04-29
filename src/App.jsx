import { useState } from 'react'
import { textSensitive } from './textSensitive'
import { useId } from 'react'

const InputName = ({ filters, handleNameChange }) => {
	const id = useId()

	return (
		<>
			<label htmlFor={id + '-name'}>Filtrar por nombre:</label>
			<input
				type='text'
				id={id + '-name'}
				value={filters.name}
				onChange={handleNameChange}
				placeholder='Nombre del superhéroe'
			/>
		</>
	)
}

const initialSuperheroes = [
	{ id: 1, name: 'Spider-Man', affiliation: 'Marvel' },
	{ id: 2, name: 'Batman', affiliation: 'DC' },
	{ id: 3, name: 'Iron Man', affiliation: 'Marvel' },
	{ id: 4, name: 'Wonder Woman', affiliation: 'DC' },
]

const initialFilters = {
	affiliation: 'All',
	name: '',
}

const SuperheroesList = () => {
	const [superheroes] = useState(initialSuperheroes)
	const [filters, setFilters] = useState(initialFilters)

	const id = useId()

	const handleAffiliationChange = (e) => {
		setFilters({
			...filters,
			affiliation: e.target.value,
		})
	}

	const handleNameChange = (e) => {
		setFilters({
			...filters,
			name: e.target.value,
		})
	}

	const filterSuperheroes = () => {
		return superheroes.filter(
			(superhero) =>
				(filters.affiliation === 'All' ||
					superhero.affiliation === filters.affiliation) &&
				textSensitive(superhero.name, filters.name)
		)
	}

	const filteredSuperheroes = filterSuperheroes()

	return (
		<main>
			<form>
				<label htmlFor={id + '-afilliation'}>Filtrar por afiliación:</label>
				<select
					id={id + '-afilliation'}
					value={filters.affiliation}
					onChange={handleAffiliationChange}
				>
					<option value='All'>Todos</option>
					<option value='Marvel'>Marvel</option>
					<option value='DC'>DC</option>
				</select>
			</form>

			<br />

			<InputName
				filters={filters}
				handleNameChange={handleNameChange}
			/>
			<InputName
				filters={filters}
				handleNameChange={handleNameChange}
			/>
			<InputName
				filters={filters}
				handleNameChange={handleNameChange}
			/>

			<ul>
				{filteredSuperheroes.map((hero) => (
					<li key={hero.id}>
						{hero.name} - {hero.affiliation}
					</li>
				))}
			</ul>
		</main>
	)
}

export default SuperheroesList
