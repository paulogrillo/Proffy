import React from 'react';
import PageHeader from '../../componennts/PageHeader';
import './styles.css';

import TeacherItem from '../../componennts/TeacherItem';
import Input from '../../componennts/Input';
import Select from '../../componennts/Select';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select 
                name="subject" 
                label="Matéria"
                options={[
                    { value: 'Typescript', label: 'Typescript'},
                    { value: 'Python', label: 'Python'},
                    { value: 'Java', label: 'Java'},
                    { value: 'Kotlin', label: 'Kotlin'},
                    { value: 'Javascript', label: 'Javascript'},

                ]}
                
                />

                <Select 
                name="week_day" 
                label="Dia da semana"
                options={[
                    { value: '0', label: 'Domingo'},
                    { value: '1', label: 'Segunda-feira'},
                    { value: '2', label: 'Terça-feira'},
                    { value: '3', label: 'Quarta-feira'},
                    { value: '4', label: 'Quinta-feira'},
                    { value: '5', label: 'Sexta-feira'},
                    { value: '6', label: 'Sábado'},

                ]}
                
                />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                
            </main>
        </div>
    )
}

export default TeacherList;