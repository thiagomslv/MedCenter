export default [
    {
        path: '/cadastro',
        name: 'register',
        component: () => import('./pages/SelecTypeRegister'),

        children: [
            {
                path: 'paciente',
                name: 'patient_register',
                component: () => import('./pages/PatientRegister'),
            },

            {
                path: 'clinica',
                name: 'clinical_register',
                component: () => import('./pages/ClinicalRegister'),
            }
        ]
    }
]