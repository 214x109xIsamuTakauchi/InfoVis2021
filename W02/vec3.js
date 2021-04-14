class Vec3
{
    constructor(x,y,z)
    {
        this.x=x;
        this.y=y;
        this.z=z;
    }
    
    min(v)
    {
        var i=this.x;
        if(i>this.y)
        {
            i=this.y;
        }
        if(i>this.z)
        {
            i=this.z;
        }
        return i;
    }
    
    mid(v)
    {
        if(this.x>this.y)
        {
            if(this.x<this.z)
            {
                return this.x;
            }
            else if(this.y>this.z)
            {
                return this.y;
            }
            else
            {
                return this.z;
            }
        }
        if(this.y<this.z)
        {
            return this.y;
        }
        else if(this.x>this.z)
        {
            return this.x;
        }
        else
        {
            return this.z;
        }
    }
    
    max(v)
    {
        var k=this.x;
        if(k<this.y)
        {
            k=this.y;
        }
        if(k<this.z)
        {
            k=this.z;
        }
        return k;
    }
}
