import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import s from './ListExpenses.module.css'
import Container from "@material-ui/core/Container";

const ListExpenses = (props) => {
    return (
        <Container className={s.container}>
            <Typography className={s.text} align='center' variant="h6">БУДИНКОВІ ВИТРАТИ</Typography>
            <Table size='small' padding='checkbox'>
                <TableHead>
                    <TableRow >
                        <TableCell align="center">Центральне опалення<br/>грн.</TableCell>
                        <TableCell align="center">Утримання будинку<br/>грн.</TableCell>
                        <TableCell align="center">Вода<br/>грн.</TableCell>
                        <TableCell align="center">Прибирання<br/>грн.</TableCell>
                        <TableCell align="center">Інтернет<br/>грн.</TableCell>
                        <TableCell align="center">Засоби для прибирання<br/>грн.</TableCell>
                        <TableCell align="center"><b>Загальна сума<br/>грн.</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.state.expenses.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.centralHeating}</TableCell>
                                <TableCell align="center">{row.keepingTheBuilding}</TableCell>
                                <TableCell align="center">{row.water}</TableCell>
                                <TableCell align="center">{row.cleaning}</TableCell>
                                <TableCell align="center">{row.internet}</TableCell>
                                <TableCell align="center">{row.cleaningProducts}</TableCell>
                                <TableCell align="center"><b>{(row.totalExpenses).toFixed(2)}</b></TableCell>
                                <TableCell align="center"
                                           onClick={() => props.editExpense(row.id)}><CreateIcon/></TableCell>
                                <TableCell align="center"
                                           onClick={() => props.deleteExpense(row.id)}><DeleteIcon/></TableCell>

                            </TableRow>
                        ))}
                    <TableRow>
                        <TableCell colSpan={9} align="center">
                            {
                                props.state.expenses.length === 0
                                    ?
                                    <Button onClick={props.addExpense} size="large" variant="outlined" color="secondary">Додати
                                        показник</Button>
                                    :
                                    <div>Розраховано згідно з ввденими даними.Відредагуйте витрати якщо є потреба.</div>

                            }
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    );
};

export default ListExpenses;