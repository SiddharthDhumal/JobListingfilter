import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import {
	Box,
	Card,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

import results from "./data";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";

function App() {
	const [result, setResult] = useState(results.data);
	const [jobRole, setJobRole] = useState("");
	const [jobtechnology, setTechnology] = useState("");
	const [jobexperience, setExperience] = useState("");
	const [ctc, setCTC] = useState(0);

	// useEffect(() => {
	// 	const getData = async () => {
	// 		try {
	// 			const extractedData = await axios.get(
	// 				`https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json`
	// 			);

	// 			const finalData = extractedData.data;

	// 			console.log(extractedData);
	// 			console.log(finalData);

	// 			setResult(finalData);

	// 			// console.log(result);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	getData();
	// }, []);

	useEffect(() => {
		// const filteredData = (item) => {
		// 	return{
		//     item.role.includes()
		//   }

		// };

		let data = results;

		data = results.data.filter(
			(item) =>
				item.role.toLowerCase() === jobRole.toLowerCase() &&
				item.technology.includes(jobtechnology) &&
				item.experience.toLowerCase() === jobexperience.toLowerCase() &&
				item.ctc === ctc
			// ||
			// (item.role.toLowerCase() === jobRole.toLowerCase() &&
			// 	item.technology.includes(jobtechnology)) ||
			// (item.role.toLowerCase() === jobRole.toLowerCase() &&
			// 	item.experience.toLowerCase() === jobexperience.toLowerCase()) ||
			// (item.role.toLowerCase() === jobRole.toLowerCase() &&
			// 	item.ctc === ctc) ||
			// (item.technology.includes(jobtechnology) &&
			// 	item.experience.toLowerCase() === jobexperience.toLowerCase()) ||
			// (item.experience.toLowerCase() === jobexperience.toLowerCase() &&
			// 	item.ctc === ctc)
		);

		// let data = results;

		// data = results.data.filter;

		setResult(data);
	}, [jobRole, jobtechnology, jobexperience, ctc]);

	return (
		<Box className="App">
			<Box
				className="filters"
				style={{
					backgroundColor: "#66d9e8",
					color: "white",
					padding: "2rem 3rem",
				}}
			>
				{/* <Box id="role-filter">
					<label>
						JOB ROLE
						<select
							name="role"
							value={jobRole}
							onChange={(e) => setJobRole(e.target.value)}
						>
							<option value="">Nothing Selected</option>
							<option value="Frontend">Frontend</option>
							<option value="FullStack">FullStack</option>
							<option value="Backend">Backend</option>
						</select>
					</label>
				</Box> */}

				<Box className="location_type" sx={{ minWidth: 120 }} id="role-filter">
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">jobRole</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={jobRole}
							label="jobRole"
							onChange={(e) => setJobRole(e.target.value)}
						>
							{/* <MenuItem value="">Nothing Selected</MenuItem>
							<MenuItem value="Frontend">Frontend</MenuItem>
							<MenuItem value="FullStack">FullStack</MenuItem>
							<MenuItem value="Backend">Backend</MenuItem> */}
							{results.role.map((item, idx) => (
								<MenuItem key={idx + 1} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>

				<Box
					className="location_type"
					sx={{ minWidth: 120 }}
					id="technology-filter"
				>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">technology</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={jobtechnology}
							name="technology"
							label="technology"
							onChange={(e) => setTechnology(e.target.value)}
						>
							{results.technology.map((item, idx) => (
								<MenuItem key={idx + 1} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>

				{/* <Box id="technology-filter">
					<label>
						TECHNOLOGY
						<select
							name="technology"
							value={technology}
							onChange={(e) => setTechnology(e.target.value)}
						>
							<option value="">Nothing Selected</option>
							<option value="Frontend">yet to decied</option>
							<option value="FullStack">yet to decied</option>
							<option value="Backend">yet to decied</option>
						</select>
					</label>
				</Box> */}

				<Box
					className="location_type"
					sx={{ minWidth: 120 }}
					id="experience-filter"
				>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">experience</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={jobexperience}
							name="experience"
							label="experience"
							onChange={(e) => setExperience(e.target.value)}
						>
							{results.experience.map((item, idx) => (
								<MenuItem key={idx + 1} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>

				{/* <Box id="experience-filter">
					<label>
						EXPERIENCE
						<select
							name="experience"
							value={experience}
							onChange={(e) => setExperience(e.target.value)}
						>
							<option value="">Nothing Selected</option>
							<option value="Frontend">yet to decied</option>
							<option value="FullStack">yet to decied</option>
							<option value="Backend">yet to decied</option>
						</select>
					</label>
				</Box> */}

				<Box className="location_type" sx={{ width: 300 }}>
					CTC
					<Slider
						size="small"
						min={0}
						max={50}
						defaultValue={0}
						aria-label="Small"
						valueLabelDisplay="auto"
						value={ctc}
						onChange={(e) => setCTC(e.target.value)}
					/>
				</Box>
			</Box>
			<TableContainer component={Paper}>
				<Table
					className="leads_table"
					sx={{ minWidth: 650 }}
					aria-label="simple table"
				>
					<TableBody>
						{result.map((item) => (
							<Card
								variant="outlined"
								style={{ width: "80%", margin: "2rem auto" }}
							>
								<TableRow
									key={item.name}
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										gap: "50px",
										margin: "1.4rem",
									}}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<Box style={{ display: "flex", gap: "20px" }}>
										<img src={item.logo} alt="company logo" />
										<Box style={{ display: "flex", flexDirection: "column" }}>
											<TableCell align="left">{item.company}</TableCell>
											<TableCell align="left">{item.position}</TableCell>
											<Box
												style={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<TableCell align="left">{item.experience} | </TableCell>
												<TableCell align="left">{item.contract} | </TableCell>
												<TableCell align="left">{item.location}</TableCell>
											</Box>
										</Box>
									</Box>
									<Box>
										<TableCell align="left">{item.role} </TableCell>
										<TableCell align="left">
											{item.technology.map((item) => (
												<span>{item} , </span>
											))}
										</TableCell>
										<TableCell align="left">{item.ctc}-CTC</TableCell>
									</Box>
								</TableRow>
							</Card>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default App;
