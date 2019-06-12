const express = require('express')
const bountyRouter = express.Router()
const bounty = require('./models/bounty')

bountyRouter.route('/')

    .get((request, response) => {
        Bounty.find((err, bounty) =>{
            if(err){
                return response.status(500).send(err)
            }
            return response.status(200).send(bounty)

    })
})

    
    .post( (request, response) => {
        const newBounty = new Bounty(request.body)
        newBounty.save((err, new_bounty) => {
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(201).send(new_bounty)
        })
    })


    bountyRouter.route('/:id')

    .get( (request, resonse) => {
        Bounty.findById(request.params.id, (err, bounty) => {
            if(err){
                return response.status(500).send(err)
            }
            return response.status(200).send(bounty)
        })
    })

    .delete((request, response) => {
        Bounty.findByIdAndDelete(request.params.id, (err) => {
            if(err) {
                return response.status(500).send(err)
            }
            return response.status(200).send('Successfully Deleted Destination')
        })
    })
    


    .put( (request, response) => {
        Bounty.findByIdAndUpdate(
            request.params.id,
            request.body,
            {new: true},
            (err, bounty) => {
                if(err){
                    return response.status(500).send(err)
                }
                return response.status(201).send(bounty)
            })
        
    })

module.exports = bountyRouter