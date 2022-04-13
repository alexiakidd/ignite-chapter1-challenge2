import { GenreResponseProps, MovieProps } from '../App';
import { MovieCard } from './MovieCard';

export function Content({ title, movies }: any): JSX.Element {
	return (
		<div className="container">
			<header>
				<span className="category">
					Categoria:<span> {title}</span>
				</span>
			</header>

			<main>
				<div className="movies-list">
					{movies.map((movie: MovieProps) => (
						<MovieCard
							key={movie.imdbID}
							title={movie.Title}
							poster={movie.Poster}
							runtime={movie.Runtime}
							rating={movie.Ratings[0].Value}
						/>
					))}
				</div>
			</main>
		</div>
	);
}
