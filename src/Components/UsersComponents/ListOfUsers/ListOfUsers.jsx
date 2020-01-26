import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import s from './ListOfUsers.module.css'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";

const ListOfUsers = (props) => {
    let energyPriceOneDay = props.totalEnergyPrice / props.totalPresentDays;
    return (
        <Container className={s.container}>
            <Typography className={s.text} align='center' variant='h6'>СПИСОК ЖИТЕЛІВ</Typography>
            <Table size='small' padding='checkbox'>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">№ кімнати</TableCell>
                        <TableCell align="center">Ім'я</TableCell>
                        <TableCell align="center">Присутні дні</TableCell>
                        <TableCell align="center">Сума за електроенергію</TableCell>
                        <TableCell align="center">Комунальні витрати</TableCell>
                        <TableCell align="center">До оплати</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.state.users.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.flat}</TableCell>
                                <TableCell align="center">{row.userName}</TableCell>
                                <TableCell align="center">{row.daysPresent}</TableCell>
                                <TableCell
                                    align="center">{(energyPriceOneDay * row.daysPresent).toFixed(2)}</TableCell>
                                <TableCell
                                    align="center">{(props.totalExpenses / props.state.users.length).toFixed(2)}</TableCell>
                                <TableCell
                                    align="center">{(+(energyPriceOneDay * row.daysPresent) + +(props.totalExpenses / props.state.users.length)).toFixed(2)}</TableCell>
                                <TableCell align="center" onClick={() => props.editUser(row.id)}><CreateIcon fontSize="small"/></TableCell>
                                <TableCell align="center" onClick={() => props.deleteUser(row.id)}><DeleteIcon fontSize="small"/></TableCell>
                            </TableRow>
                        ))}
                    <TableRow>
                        <TableCell align="center" ><strong>Загально:</strong></TableCell>
                        <TableCell rowSpan={1} />
                        <TableCell align="center" ><strong>{props.totalPresentDays}</strong></TableCell>
                        <TableCell align="center" ><strong>{props.totalEnergyPrice}</strong></TableCell>
                        <TableCell align="center" ><strong>{props.totalExpenses}</strong></TableCell>
                        <TableCell align="center" ><strong>{(+props.totalEnergyPrice + +props.totalExpenses).toFixed(2)}</strong></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={8} align="center">
                            <Button onClick={props.addUser} size="large" variant="outlined" color="secondary">Додати жителя</Button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    );
};

export default ListOfUsers;