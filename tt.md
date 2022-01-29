        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Fill the form to Book Appointment
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Service</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="Ultrasound" control={<Radio />} label="Ultrasound" />
                    <FormControlLabel value="X-ray" control={<Radio />} label="X-ray" />
                    <FormControlLabel value="Flouroscopy" control={<Radio />} label="Flouroscopy" />
                    <FormControlLabel value="Mammogram" control={<Radio />} label="Mammogram" />

                    <FormControlLabel
                      value="ct-scan-MRI"
                      control={<Radio />}
                      label="CT scan & MRI"
                    />

                    <FormControlLabel
                      value="electrocardiogram"
                      control={<Radio />}
                      label="Electrocardiogram (ECG)"
                    />

                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                  <MKBox mb={2} mt={2}>
                    <MKInput
                      // variant="standard"
                      label="Reason for appointment"
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput label="Full Name" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="number" label="Phone Number" fullWidth />
                  </MKBox>

                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth max={10} />
                  </MKBox>

                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth>
                      Submit
                    </MKButton>
                  </MKBox>
                </FormControl>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
