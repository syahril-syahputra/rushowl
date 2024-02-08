import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { ChangeEvent } from 'react';

interface IProps {
    placeholder?: string;
    icon: IconProp;
    type: string;
    name: string;
    block?: boolean;
    error?: string;
    value: string;
    disable?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function InputText(props: IProps) {
    return (
        <div>
            <div
                className={clsx(
                    'flex items-center space-x-2 border-b border-orange-400  px-2 text-slate-400 focus-within:border-slate-300 focus-within:bg-slate-100 focus-within:text-slate-700',
                    props.block ? 'w-full' : 'w-min',
                    props.error && 'border !border-red-300'
                )}
            >
                <FontAwesomeIcon icon={props.icon} size="lg" className="" />
                <input
                    type={props.type}
                    name={props.name}
                    disabled={props.disable}
                    value={props.value}
                    className="flex-1 bg-transparent p-2 outline-none"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </div>
            {props.error && (
                <div className="my-2 pl-11 pr-4 text-sm text-red-300">
                    {props.error}
                </div>
            )}
        </div>
    );
}
