import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const CharacterTable = ({ dadosPersonagens }) => {
    const montaHtml = (dadosPersonagens) => {
        return dadosPersonagens?.map((personagem) => (
            <TableRow key={ personagem._id }>
                <TableCell>{ personagem._id }</TableCell>
                <TableCell>
                    <a href={ `/details/${personagem._id}` }>{ personagem.name }</a>
                </TableCell>
            </TableRow>
        ));
    };

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{ montaHtml(dadosPersonagens) }</TableBody>
            </Table>
        </div>
    );
};

export default CharacterTable;
