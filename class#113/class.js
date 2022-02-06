const DefaultOptions = {
    value: "",
    storageType: localStorage,
}

class Storage{
    constructor(key, options = DefaultOptions){
        this.key = key,
        this.value = options.value,
        this.storageType = options.storageType
        this.set(this.value)
    }

    get(){
        return this.storageType.getItem(this.key)
       
    }
    set(value){
        this.storageType.setItem(this.key, value)
    }
    clear(){
        this.storageType.setItem(this.key, '')
    }
    isEmpty(){
        return !this.storageType.getItem(this.key) ? true : false
    }
}
