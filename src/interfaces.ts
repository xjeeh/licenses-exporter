interface IPackages {
    [index: string]: IPackage;
}

interface IPackage {
    licenses: string;
    repository: string;
    publisher: string;
    email: string;
    patch: string;
    licenseFile: string;
}

export { IPackage, IPackages };
