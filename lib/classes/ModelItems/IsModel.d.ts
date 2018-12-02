/**
 * An interface for identifying components which are used in the form model.
 */
export interface IsModel {
    /**
     * A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted
     */
    control: string;
}
