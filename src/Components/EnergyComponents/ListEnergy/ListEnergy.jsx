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


class ListEnergy extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="h4" className={s.style}>Розрахунок за електроенергію</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="center">Поточний показник</TableCell>
                            <TableCell align="center">Останній показник</TableCell>
                            <TableCell align="center">Спожито кВт</TableCell>
                            <TableCell align="center">Сума (кВт*1.68)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.props.state.energy.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell align="center">{row.currentValue}</TableCell>
                                    <TableCell align="center">{row.lastValue}</TableCell>
                                    <TableCell align="center">{row.energyUsedKw}</TableCell>
                                    <TableCell align="center">{row.energyPrice}</TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.editEnergy(row.id)}><CreateIcon/></TableCell>
                                    <TableCell align="center"
                                               onClick={() => this.props.deleteEnergy(row.id)}><DeleteIcon/></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <Button variant="contained" color="primary" onClick={this.props.addEnergy}>Додати показник</Button>
            </div>
        );
    }

}


export default ListEnergy;