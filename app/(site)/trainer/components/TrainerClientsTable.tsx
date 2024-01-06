import React from 'react'
import { IUser } from '../../../../interfaces/user'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"
import { poppins } from '../../../components';

const TrainerClientsTable = ({ foundClients }: { foundClients: IUser[] }) => {
    const state = 'paid';
    return (
        <Table className={`bg-secondary-light text-surface-light   rounded-xl ${poppins.className}`}>
            <TableHeader>
                <TableRow className='text-xl'>
                    <TableHead className=" text-surface-light">Member</TableHead>
                    <TableHead className='text-surface-light'>Status</TableHead>
                    <TableHead className='text-surface-light'>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody >
            {foundClients.map(({ username, fullname, image, /*state*/ }) => (
                    <TableRow key={username} className='text-xl '>
                        <TableCell className='w-full flex-1 font-semibold'>{fullname}</TableCell>
                        <TableCell className='w-full'>{state === 'paid' ? <div className="mx-auto w-4 h-4 rounded-full bg-green-300"></div> : <div className="mx-auto w-4 h-4 rounded-full bg-red-300"></div>}</TableCell> 
                        <TableCell className='text-center'>
                            <a href={`/trainer/create/${username}`}>Edit</a>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TrainerClientsTable