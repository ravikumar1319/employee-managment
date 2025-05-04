export const titleConfig: any = {
    "": { title: "Employee List", desc: 'Employee List' },
    "add": { title: "Add Employee ", desc: 'Add Employee ' },
    "reports": { title: "Report List", desc: 'Report List' },
    "edit": { "id": { title: "Edit Employee", desc: 'Edit Employee' } }
}

export const getTitleConfigValue = (path: string, fallback: any = { title: 'N/A', desc: '' }) => {
    return path.split('.').reduce((acc, key) => {
        return acc && acc[key] !== undefined ? acc[key] : fallback;
    }, titleConfig);
}
