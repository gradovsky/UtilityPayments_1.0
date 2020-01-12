import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import s from './ListEnergy.module.css'
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";


const ListEnergy = (props) => {
    return (
        <Container maxWidth='lg' className={s.style}>
            <Typography variant="h4" className={s.text}>ЕЛЕКТРОЕНЕРГІЯ</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Поточний показник</TableCell>
                        <TableCell align="center">Останній показник</TableCell>
                        <TableCell align="center">Спожито кВт</TableCell>
                        <TableCell align="center"><b>Сума (кВт*1.68)</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.state.energy.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.currentValue}</TableCell>
                                <TableCell align="center">{row.lastValue}</TableCell>
                                <TableCell align="center">{row.energyUsedKw}</TableCell>
                                <TableCell align="center"><b>{row.energyPrice}</b></TableCell>
                                <TableCell align="center"
                                           onClick={() => props.editEnergy(row.id)}><CreateIcon/></TableCell>
                                <TableCell align="center"
                                           onClick={() => props.deleteEnergy(row.id)}><DeleteIcon/></TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <div className={s.centerBtn}>
                {
                    props.state.energy.length === 0
                        ?
                        <Button onClick={props.addEnergy} size="large" variant="text" color="primary">Додати
                            показник</Button>
                        :
                        <Button disabled='true' onClick={props.addEnergy} size="large" variant="text"
                                color="primary">Додати показник</Button>
                }
            </div>
        </Container>
    );
}


export default ListEnergy;