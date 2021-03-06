import { GenreResponseProps } from '../App';
import { Button } from './Button';

export function SideBar({
	genres,
	selectedGenreId,
	setSelectedGenreId,
}: any): JSX.Element {
	function handleClickButton(id: number) {
		setSelectedGenreId(id);
	}
	return (
		<nav className="sidebar">
			<span>
				Watch<p>Me</p>
			</span>

			<div className="buttons-container">
				{genres.map((genre: GenreResponseProps) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClickButton(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	);
}
