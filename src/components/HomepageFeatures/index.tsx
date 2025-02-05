import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: ReactNode;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Run your own server',
		Svg: require('@site/static/img/hosting.svg').default,
		description: (
			<>
			OpenGarlic was built to run in docker containers,
			to quickly and easily start your own.
			</>
		),
		},
		{
		title: 'Develop your own game modes',
		Svg: require('@site/static/img/gamedev.svg').default,
		description: (
			<>
			OpenGarlic was built to allow custom game modes
			that have a lot of control.
			</>
		),
		},
		{
		title: 'Share your modes with others',
		Svg: require('@site/static/img/share.svg').default,
		description: (
			<>
			We encourage you to share modes you've created
			with others. We intend to have a place to collect
			these for easy browsing.
			</>
		),
		},
];

function Feature({title, Svg, description}: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
