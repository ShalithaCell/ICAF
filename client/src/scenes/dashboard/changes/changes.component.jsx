import React from 'react';
import { Helmet } from 'react-helmet';
import {
	Box,
	Container,
	Grid,
} from '@material-ui/core';
import changesList from '../../../assets/data/changesItems';
import { ChangesCard } from '../../../components/organisms';

const ChangesList = () => (
	<>
		<Helmet>
			<title>Changes | ICAF</title>
		</Helmet>
		<Box
			sx={{
				backgroundColor : 'background.default',
				minHeight       : '100%',
				py              : 3,
			}}
		>
			<Container maxWidth={false}>
				<Box sx={{ pt: 3 }}>
					<Grid
						container
						spacing={3}
					>
						{changesList.map((item) => (
							<Grid
								item
								key={item.id}
								lg={4}
								md={6}
								xs={12}
							>
								<ChangesCard items={item} />
							</Grid>
						))}
					</Grid>
				</Box>
				<Box
					sx={{
						display        : 'flex',
						justifyContent : 'center',
						pt             : 3,
					}}
				/>
			</Container>
		</Box>
	</>
);

export default ChangesList;